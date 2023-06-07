const elSitenavOpener = document.querySelector('.sitenav-opener');
const elSiteNavList = document.querySelector('.js-sitenav');

elSitenavOpener.addEventListener('click', function () {
  elSitenavOpener.classList.toggle('sitenav-opener-active');
  elSiteNavList.classList.toggle('site-nav-list-open')
})