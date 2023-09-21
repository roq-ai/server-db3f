interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Admin', 'Moderator', 'Registered User', 'Guest User'],
  tenantName: 'Company',
  applicationName: 'Server',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read posts', 'Read comments', 'Read companies', 'Read tags'],
  ownerAbilities: ['Manage users', 'Manage posts', 'Manage companies', 'Manage comments'],
  getQuoteUrl: 'https://app.roq.ai/proposal/375c0845-4b6d-4f5f-96e8-11e26397380c',
};
