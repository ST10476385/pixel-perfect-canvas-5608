// ============ PATRON SETTINGS (edit here) ============
export const FOUNDING_SPOTS_LEFT = 2;
export const WHATSAPP_NUMBER = "27000000000"; // [WHATSAPP NUMBER] country code, no plus or spaces
export const WHATSAPP_DISPLAY = "+27 00 000 0000";
export const CELL_NUMBER = "+27 00 000 0000";
export const EMAIL = "hello@patron.co.za";
export const INSTAGRAM = "https://instagram.com/";
export const FACEBOOK = "https://facebook.com/";
export const FOUNDER_1 = "[Founder 1]";
export const FOUNDER_2 = "[Founder 2]";

export const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Patron%2C%20I%27d%20like%20to%20know%20more`;

export const spotsText = () =>
  FOUNDING_SPOTS_LEFT === 1 ? "1 test spot left" : `${FOUNDING_SPOTS_LEFT} test spots available`;
