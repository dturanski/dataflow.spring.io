import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Breadcrumb = ({ pages }) => (
  <>
    {pages.length > 1 && (
      <div className="breadcrumb">
        {pages.map((page, index) => (
          <span key={`${index}index`}>
            {pages.length == index + 1 ? (
              <span key={`s${page.path}${index}`}>{page.title}</span>
            ) : (
              <span key={`s2${page.path}${index}`}>
                <Link to={page.path} key={`a${page.path}${index}`}>
                  {page.title}
                </Link>
                <span className="separator">
                  <FontAwesomeIcon icon="chevron-right" />
                </span>
              </span>
            )}
          </span>
        ))}
      </div>
    )}
  </>
)

Breadcrumb.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
}

export default Breadcrumb
