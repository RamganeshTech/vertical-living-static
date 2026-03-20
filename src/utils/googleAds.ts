
type ConversionEvent = 
  | 'whatsapp_click_VL' 
  | 'phone_call_click_VL' 
  | 'inquiry_form_VL' 
  | 'cost_calculator_VL'
  | 'phone_call_website_VL';

export const trackConversion = (eventName: ConversionEvent, extraData?: object) => {
  if (window.dataLayer) {
                console.log("getin inside the window.dataLayer")

    window.dataLayer.push({
      event: eventName,
      ...extraData
    });
    console.log(`✅ GTM Event Fired: ${eventName}`);
  } else {
    console.warn("⚠️ GTM dataLayer not found");
  }
};