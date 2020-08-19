import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Button from '../../elements/Button/Button';

const Film = lazy(() => import('../../elements/Film/Film'));

export default function LazyView({
  information, getFilm, title, buttonTitle, loading, search, handleSearch
}) {
  return (
    <div>
      <p className="App-intro">
        {title}
      </p>
      <Suspense fallback={<p>Loading component...</p>}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          information.Title && <Film film={information} />
        )}
      </Suspense>
      <input type="text" value={search} onChange={handleSearch} />
      <Button
        title={buttonTitle}
        buttonClass="update-film"
        handleClick={getFilm}
      />
    </div>
  );
}

LazyView.propTypes = {
  information: PropTypes.shape({
    Title: PropTypes.string.isRequired,
  }).isRequired,
  getFilm: PropTypes.func.isRequired,
  title: PropTypes.element.isRequired,
  buttonTitle: PropTypes.element.isRequired,
  loading: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
