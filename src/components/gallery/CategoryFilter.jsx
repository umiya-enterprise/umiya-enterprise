import { memo } from 'react';

function CategoryFilter({ categories, active, counts, onChange }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter projects by category">
      {categories.map((category) => {
        const isActive = active === category.id;
        return (
          <button
            key={category.id}
            type="button"
            className={`category-filter__btn${isActive ? ' is-active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onChange(category.id)}
            disabled={counts[category.id] === 0}
          >
            {category.label}
            <span className="category-filter__count" aria-hidden="true">
              {counts[category.id]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default memo(CategoryFilter);
