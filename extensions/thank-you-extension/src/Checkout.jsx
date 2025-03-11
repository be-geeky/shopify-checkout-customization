import {
  reactExtension,
  BlockStack,
  Text,
  useApi,
  useApplyAttributeChange,
  useTranslate,
  useAttributes,
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.thank-you.block.render", () => (
  <Extension />
));

function Extension() {
  const attributes = useAttributes();
  console.log("All attributes:", attributes);

  const requestedFreeGiftObj = attributes.find(
    (attr) => attr.key === "requestedFreeGift"
  );
  const requestedFreeGift = requestedFreeGiftObj
    ? requestedFreeGiftObj.value
    : "no";
  console.log("Raw requestedFreeGift value:", requestedFreeGift);

  return (
    <BlockStack>
      <Text>✅ Thank you page extension is loaded!</Text>
      {requestedFreeGift === "yes" ? (
        <Text>🎁 Your free gift has been added to your order!</Text>
      ) : (
        <Text>❌ No gift was requested.</Text>
      )}
    </BlockStack>
  );
}
