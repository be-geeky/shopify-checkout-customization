import {
  reactExtension,
  BlockStack,
  Checkbox,
  useApplyAttributeChange,
  useTranslate,
  useApplyCartLinesChange,
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();

  //const instructions = useInstructions();
  const applyCartLinesChange = useApplyCartLinesChange();
  const freeProduct = {
    merchandiseId: "gid://shopify/ProductVariant/49066777936155",
    quantity: 1,
    type: "addCartLine",
  };

  const applyAttributeChange = useApplyAttributeChange();

  // 3. Render a UI
  return (
    <BlockStack border={"dotted"} padding={"tight"}>
      <Checkbox
        onChange={(isChecked) => onCheckboxChange(isChecked, freeProduct)}>
        {translate("iWouldLikeAFreeGiftWithMyOrder")}
      </Checkbox>
    </BlockStack>
  );
  async function onCheckboxChange(isChecked, freeProduct) {
    if (isChecked) {
      await applyCartLinesChange(freeProduct);
    } else {
      await applyCartLinesChange({ ...freeProduct, type: "removeCartLine" });
    }
    
    // 4. Call the API to modify checkout
    const result = await applyAttributeChange({
      key: "requestedFreeGift",
      type: "updateAttribute",
      value: isChecked ? "yes" : "no",
    });
    console.log("applyAttributeChange result", result);
  }
}
