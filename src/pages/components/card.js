import React from 'react'

const card = () => {
    return (
        <div className="cardCont">
            <div className="img">

                <img src="https://placeimg.com/200/100"></img>
            </div>

            <div className="prodD">

                <h2>Product Name</h2>
                <p>Nullam posuere turpis vel lacinia luctus. Donec in efficitur neque. Curabitur consectetur non ipsum in eleifend. Praesent id velit in nisi maximus porta nec vitae odio. Proin vitae magna a massa accumsan venenatis. Donec semper, sem in ullamcorper bibendum, mauris sem imperdiet lorem, tempor aliquet ligula lorem sit amet nibh. Suspendisse potenti.</p>
                <h4>231,-</h4>
            </div>

            <div className="bottom">
                <div className="qw">
                    <p>QuickView</p>
                </div>
                <div className="btn">
                    <p>Add To Card</p>
                </div>
            </div>
        </div>
    )
}

export default card
