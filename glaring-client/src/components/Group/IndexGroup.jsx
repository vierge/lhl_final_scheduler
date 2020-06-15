import React from "react";
import "./IndexGroup.scss";
import Button from "./ButtonGroup";

export default function Group() {
  function joinGroup() {
    console.log("Join Group");
  }

  return (

    <div className="main">
      <main className="group">

        <div className="group__top">
          <img
            className="group__image"
            src="https://res.cloudinary.com/teepublic/image/private/s--mKVtE5Jo--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1544483374/production/designs/3703099_0.jpg"
          />

          <div className="group__content">
            <div className="group__title">Group Name</div>
          </div>
        </div>

        <div className="group__middle" >
          <div className="group__description">Group Description Goes Here</div>
        </div>

        <div className="group__bottom">

            <div className="group__bottom--button">
             <Button confirm onClick={joinGroup}>
                Join Group
             </Button>
           </div>
        
        </div>

      </main>
    </div>
  )
}