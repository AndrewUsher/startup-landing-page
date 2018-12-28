const $$ = id => document.getElementById(id)
const seePricingBtn = $$('see-pricing')
const pricingContainer = $$('pricing-section')

seePricingBtn.addEventListener('click', e => {
  e.preventDefault()
  pricingContainer.scrollIntoView({ behavior: 'smooth' })
})
