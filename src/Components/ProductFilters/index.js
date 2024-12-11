import React, {useState} from 'react'
import './index.css' // Import CSS file

const ProductFilters = () => {
  const [filters, setFilters] = useState({
    idealFor: 'All',
    occasion: 'All',
    work: 'All',
    fabric: 'All',
    segment: 'All',
    suitableFor: 'All',
    rawMaterials: 'All',
    pattern: 'All',
  })

  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: value,
    }))
  }

  return (
    <div className="product-filters">
      <hr />
      <div className="filter-group">
        <label htmlFor="idealFor">Ideal For</label>
        <br />
        <select
          id="idealFor"
          value={filters.idealFor}
          onChange={e => handleFilterChange('idealFor', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <hr />

      <div className="filter-group">
        <label htmlFor="occasion">Occasion</label>
        <br />
        <select
          id="occasion"
          value={filters.occasion}
          onChange={e => handleFilterChange('occasion', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Party">Party</option>
        </select>
      </div>
      <hr />

      <div className="filter-group">
        <label htmlFor="work">Work</label>
        <br />
        <select
          id="work"
          value={filters.work}
          onChange={e => handleFilterChange('work', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Office">Office</option>
          <option value="Casual">Casual</option>
        </select>
      </div>

      <hr />
      <div className="filter-group">
        <label htmlFor="fabric">Fabric</label>
        <br />
        <select
          id="fabric"
          value={filters.fabric}
          onChange={e => handleFilterChange('fabric', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Cotton">Cotton</option>
          <option value="Silk">Silk</option>
          <option value="Wool">Wool</option>
        </select>
      </div>

      <hr />
      <div className="filter-group">
        <label htmlFor="segment">Segment</label>
        <br />
        <select
          id="segment"
          value={filters.segment}
          onChange={e => handleFilterChange('segment', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Luxury">Luxury</option>
          <option value="Budget">Budget</option>
        </select>
      </div>

      <hr />
      <div className="filter-group">
        <label htmlFor="suitableFor">Suitable For</label>
        <br />
        <select
          id="suitableFor"
          value={filters.suitableFor}
          onChange={e => handleFilterChange('suitableFor', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
        </select>
      </div>

      <hr />
      <div className="filter-group">
        <label htmlFor="rawMaterials">Raw Materials</label>
        <br />
        <select
          id="rawMaterials"
          value={filters.rawMaterials}
          onChange={e => handleFilterChange('rawMaterials', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Leather">Leather</option>
          <option value="Polyester">Polyester</option>
        </select>
      </div>

      <hr />
      <div className="filter-group">
        <label htmlFor="pattern">Pattern</label>
        <br />
        <select
          id="pattern"
          value={filters.pattern}
          onChange={e => handleFilterChange('pattern', e.target.value)}
        >
          <option value="All">All</option>
          <option value="Solid">Solid</option>
          <option value="Printed">Printed</option>
        </select>
      </div>
    </div>
  )
}

export default ProductFilters
