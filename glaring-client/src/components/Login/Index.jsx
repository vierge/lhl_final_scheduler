/**@jsx jsx */

import React, { useState } from "react";
import "./LoginForm.scss";
import { css, jsx } from "@emotion/core";
import Button from "./ButtonLogin";
import { useForm } from "react-hook-form";
import { useDataDispatch, useDataState } from "../../hooks/useDatabase";

export default function Login() {
  const callDatabase = useDataDispatch();
  const state = useDataState();

  const { handleSubmit, register, errors } = useForm();

  async function onSubmit(data) {
    console.log(data);
    await callDatabase("LOGIN", data);
  }

  return (
    <div
      className="main"
      css={css`
        height: 100vh;
        width: 500px;
      `}
    >
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__top">
          <div className="login__title">Login Here</div>
        </div>

        <div className="login__content">
          <img
            className="login__image"
            src="https://res.cloudinary.com/teepublic/image/private/s--mKVtE5Jo--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1544483374/production/designs/3703099_0.jpg"
          />

          <br />
          <br />

          <label for="groupEmail">Email: </label>
          <input
            ref={register}
            className="creation__create-input text--semi-bold"
            name="email"
            type="email"
            placeholder="Enter Email"
          />

          <br />
          <br />

          <label for="password">Password:</label>
          <input
            ref={register}
            id="password"
            className="creation__create-input text--semi-bold"
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>

        <div className="login__bottom">
          <div className="login__bottom--button">
            <Button type="submit">Login</Button>
          </div>
        </div>
      </form>
      <button
        onClick={(event) => callDatabase("SIGNUPVIEW")}
        css={css`
          background-color: #888;
          border-style: none;
          font-size: 14px;
          position: absolute;
          right: 65px;
          height: 75px;
          top: 40%;
        `}
      >
        No account? Sign up :3
      </button>
    </div>
  );
}
