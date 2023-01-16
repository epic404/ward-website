
export function getCirclesLink() {
  const webLink = 'https://www.churchofjesuschrist.org/youth/childrenandyouth/gospel-living-app?lang=eng';
  const appleLink = 'https://apps.apple.com/us/app/gospel-living/id1245330433';
  const androidLink = 'https://play.google.com/store/apps/details?id=org.lds.liv&hl=en_US';
  const deviceData = navigator.userAgent

  if (/android|linux/i.test(deviceData.toLowerCase())) {
    return androidLink;
  } else if (/iPad|iPhone|iPod/.test(deviceData)) {
    return appleLink;
  }
  return webLink;
}