import React from 'react';

export default function Pricelist(props) {
  return <>
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
          <h6 className="card-price text-center">{props.data.price}</h6>
          <hr/>
          <ul className="fa-ul">
            {
              props.data.features.map((feature) => {
                return <li className={feature.isEnabled ? "" : "text-muted"}><span className="fa-li"><i class={`fa ${feature.isEnabled ? 'fa-check' : 'fa-times'}`} ></i></span>{feature.name}</li>
              })
            }
          </ul>
          <button href="#" className="btn btn-block btn-primary text-uppercase">Button</button>
        </div>
      </div>
    </div>
  </>
}