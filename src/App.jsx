import React from 'react'

export default function App() {
cons

  return (
    <div className="app">
      <header>
        <h1>Product Listing</h1>
      </header>
     {location.page ==='list' && (
        <div>
            Product Listing
        </div>
     )
     }


     {
        location.page ==='view' && (
        <div>
            Product View
        </div>
     )
     }

     {
        localation.page !== 'list' && (
            <div>
                <button onClick={() => navigateTo('list')}>Back to Listing</button>
            </div>
        )
     }
    </div>
  )
}
