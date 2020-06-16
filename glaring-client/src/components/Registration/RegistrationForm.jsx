import React from "react";
import "./RegistrationForm.scss";
import Button from "./ButtonRegistration";

export default function Registration() {
  function registerNow() {
    console.log("Register Now");
  }

  return (

    <div className="main">
      <main className="register">

        <div className="register__top">
             <div className="register__title">Register Here</div>
        </div>

          <div className="register__content">
             <img
               className="register__image"
               src="https://res.cloudinary.com/teepublic/image/private/s--mKVtE5Jo--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1544483374/production/designs/3703099_0.jpg"
             />

             <br/>
      

                <label for="groupName">Name: </label>
                   <input
                     id="groupName"
                     className="creation__create-input text--semi-bold"
                     name="name"
                     type="text"
                     placeholder="Enter Name"
                   />

             <br/>
             <br/>

                <label for="groupEmail">Email: </label>
                   <input
                     className="creation__create-input text--semi-bold"
                     name="email"
                     type="text"
                     placeholder="Enter Email"
                   />

             <br/>
             <br/>

             <label for="groupDescription">Password:</label>
                <input
                  id="groupDescription"
                   className="creation__create-input text--semi-bold"
                   name="description"
                   type="text"
                   placeholder="Enter Password"
                />
           </div>

           <div className="register__bottom">     
               <div className="register__bottom--button">
                    <Button confirm onClick={registerNow}>
                      Register
                    </Button>
              </div>    
          </div>
      </main>
    </div>
  )
}