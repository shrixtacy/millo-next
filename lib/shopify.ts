const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`Shopify fetch failed: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  images: { edges: { node: { url: string; altText: string | null } }[] };
  variants: { edges: { node: { id: string; title: string; availableForSale: boolean; price: { amount: string } } }[] };
  tags: string[];
}

export interface CartItem {
  variantId: string;
  quantity: number;
}

// ─── Queries ──────────────────────────────────────────────────────────────────

const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id title handle description descriptionHtml tags availableForSale
          priceRange { minVariantPrice { amount currencyCode } }
          images(first: 3) { edges { node { url altText } } }
          variants(first: 5) { edges { node { id title availableForSale price { amount } } } }
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id title handle description descriptionHtml tags availableForSale
      priceRange { minVariantPrice { amount currencyCode } }
      images(first: 6) { edges { node { url altText } } }
      variants(first: 10) { edges { node { id title availableForSale price { amount } } } }
    }
  }
`;

const CREATE_CART_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { checkoutUrl }
      userErrors { message field }
    }
  }
`;

// ─── Functions ────────────────────────────────────────────────────────────────

export async function getProducts(first = 12): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
    PRODUCTS_QUERY,
    { first }
  );
  const products = data.products.edges.map((e) => e.node);
  // Available products first, out of stock pushed to end
  return products.sort((a, b) => (b.availableForSale ? 1 : 0) - (a.availableForSale ? 1 : 0));
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(
    PRODUCT_BY_HANDLE_QUERY,
    { handle }
  );
  return data.productByHandle;
}

export async function createCheckout(lineItems: CartItem[]): Promise<string> {
  const data = await shopifyFetch<{
    cartCreate: { cart: { checkoutUrl: string }; userErrors: { message: string }[] };
  }>(CREATE_CART_MUTATION, {
    lines: lineItems.map((item) => ({
      merchandiseId: item.variantId,
      quantity: item.quantity,
    })),
  });

  const { cart, userErrors } = data.cartCreate;
  if (userErrors.length > 0) throw new Error(userErrors[0].message);
  return cart.checkoutUrl;
}

export function formatPrice(amount: string, currencyCode = "INR"): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0,
  }).format(parseFloat(amount));
}
