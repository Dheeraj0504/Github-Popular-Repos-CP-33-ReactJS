// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  // console.log(props)
  const {languageFilterDetails, setActiveLanguageFilterId, isActive} = props
  const {id, language} = languageFilterDetails

  const onClickLanguageFilterBtn = () => {
    setActiveLanguageFilterId(id)
  }

  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  return (
    <li>
      <button
        className={btnClassName}
        type="button"
        onClick={onClickLanguageFilterBtn}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
