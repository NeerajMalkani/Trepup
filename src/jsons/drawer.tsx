import AnalyticsLogo from "../components/AnalyticsLogo";
import EmailLogo from "../components/EmailLogo";
import MarketplaceLogo from "../components/MarketplaceLogo";
import PhotosLogo from "../components/PhotosLogo";
import StoreLogo from "../components/StoreLogo";

export const drawerData = [
  {
    header: "COMPANY",
    data: [
      {
        title: "About Trepup",
        iconType: "font",
        icon: "information-outline",
        navigation: ""
      },
      {
        title: "Only on Trepup",
        iconType: "font",
        icon: "information-outline",
        navigation: ""
      },
      {
        title: "Contact",
        iconType: "font",
        icon: "contacts",
        navigation: ""
      },
    ],
  },
  {
    header: "SERVICES",
    data: [
      {
        title: "Trepup Store",
        iconType: "svg",
        icon: <StoreLogo />,
        navigation: "TrepupStore"
      },
      {
        title: "Trepup Marketplace",
        iconType: "svg",
        icon: <MarketplaceLogo />,
        navigation: "TrepupMarketplace"
      },
      {
        title: "Trepup Analytics",
        iconType: "svg",
        icon: <AnalyticsLogo />,
        navigation: "TrepupAnalytics"
      },
      {
        title: "Trepup Photos",
        iconType: "svg",
        icon: <PhotosLogo />,
        navigation: "TrepupPhotos"
      },
      {
        title: "Trepup Email",
        iconType: "svg",
        icon: <EmailLogo />,
        navigation: "TrepupEmail"
      },
    ],
  },
  {
    header: "RESOURCES",
    data: [
      {
        title: "Trepup One",
        iconType: "font",
        icon: "information-outline",
        navigation: ""
      },
      {
        title: "Pricing Plans",
        iconType: "font",
        icon: "information-outline",
        navigation: ""
      },
      {
        title: "Help",
        iconType: "font",
        icon: "contacts",
        navigation: ""
      },
    ],
  },
  {
    header: "LEGAL",
    data: [
      {
        title: "Terms of Use",
        iconType: "font",
        icon: "information-outline",
        navigation: ""
      },
      {
        title: "Privacy Policy",
        iconType: "font",
        icon: "information-outline",
        navigation: ""
      },
      {
        title: "Cookie Policy",
        iconType: "font",
        icon: "contacts",
        navigation: ""
      },
      {
        title: " Intellectual Property Policy",
        iconType: "font",
        icon: "contacts",
        navigation: ""
      },
      {
        title: "Brand Guideline Policy",
        iconType: "font",
        icon: "contacts",
        navigation: ""
      },
    ],
  },
];
