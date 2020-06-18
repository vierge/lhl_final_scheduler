/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { useForm } from "react-hook-form";
import { useDataDispatch } from "../../hooks/useDatabase";
import { useState } from "react";
import "./Index.scss";

// import Axios from 'axios';

export default function EventForm(props) {
  const { name, description, start_time, end_time, photo, setForm } = props;

  const { handleSubmit, errors, register } = useForm();
  const callDatabase = useDataDispatch();

  async function onSubmit(data) {
    console.log(data.start_time, data.start_date);
    const newEvent = await callDatabase("ADDEVENT", data);
    console.log(newEvent);
    setForm(false);
  }

  function accepted() {
    console.log("Accepted invite");
  }

  function decline() {
    console.log("Declined invite");
  }

  const GridContainer = (props) => (
    <form
      onSubmit={handleSubmit(onSubmit)}
      css={css`
        display: grid;
        height: 150px;
        width: 100%;
        grid-template-rows: 1fr 3fr;
        grid-template-columns: 225px auto 170px 120px;
        grid-template-areas:
          "photo name time reserve"
          "photo desc time reserve";
        font-family: "Quicksand", sans-serif;
        background-color: #555;
      `}
      {...props}
    />
  );

  const PhotoFrame = (props) => (
    <input
      css={css`
        font-size: 48px;
        text-align: center;
        grid-area: photo;
        border-style: none;
        background-color: #555;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        &:focus {
          background-color: white;
          color: darkorchid;
        }
      `}
      {...props}
      ref={register({ required: true })}
    />
  );

  const TitleForm = (props) => (
    <input
      css={css`
        font-family: Quicksand, sans-serif;
        grid-area: name;
        font-size: 24px;
        background-color: #555;
        color: #aaa;
        border-style: none;
        margin: 0 10px;
        padding-left: 7px;
        width: calc(100% - 20px);

        &:focus {
          background-color: skyblue;
          color: black;
        }
      `}
      ref={register({ required: true, maxLength: 30 })}
      {...props}
    />
  );

  const Text = (props) => (
    <textarea
      css={css`
        font-family: Quicksand, sans-serif;
        font-size: 16px;
        background-color: #555;
        border-style: none;
        color: #aaa;
        margin: 10px;
        margin-bottom: 0;
        padding: 7px;
        resize: none;

        &:focus {
          background-color: violet;
          color: black;
        }
      `}
      {...props}
      ref={register({ required: true, maxLength: 256 })}
    />
  );

  const Timing = (props) => {
    // const { time } = props;

    const time = new Date();

    const inputStyle = css`
      height: 50%;
      width: 100%;
      font-size: 18px;
      border-style: none;
      background-color: #555;
      color: #aaa;

      &:focus {
        background-color: #f0a141;
        color: black;
      }
    `;

    return (
      <div
        css={css`
          padding-right: 13px;
          grid-area: time;
          font-size: 16px;
          color: #12006887;
          border-style: none;

          overflow-wrap: break-word;

          & p {
            margin: 0;
          }

          &::placeholder {
          }
        `}
        {...props}
      >
        <input css={inputStyle} type="date" name="start_date" />
        <input css={inputStyle} type="time" name="start_time" />
      </div>
    );
    {
      /* <div>{time.getDate()}</div>
        <div
          css={css`
            font-size: 31px;
            text-align: center;
          `}
        >
          <p>
            {time.toLocaleString("default", { month: "short" }).toUpperCase()}
          </p>
          <p>{time.getFullYear()}</p>
        </div>
        <div>
          {time.getHours().toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </div>
        <div>
          :
          {time
            .getMinutes()
            .toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </div> */
    }
    {
      /* </div> */
    }
  };

  const Save = (props) => (
    <div
      css={css`
        grid-area: reserve;

        & button {
          display: block;
          border-style: none;
          border: none;
          background-color: #555;
          color: white;
          height: 50%;
          width: 100%;
          font-size: 18px;
        }
      `}
      {...props}
    >
      <button
        type="submit"
        css={css`
          &:hover {
            border: 4px solid green;
            color: green;
          }
          &:active {
            background-color: green;
            color: white;
          }
        `}
      >
        SAVE
      </button>
      <button
        css={css`
          &:hover {
            border: 4px solid #771f1f;
            color: #771f1f;
          }
          &:active {
            background-color: #771f1f;
            color: white;
          }
        `}
      >
        CANCEL
      </button>
    </div>
  );

  return (
    <GridContainer>
      <PhotoFrame placeholder="https://?" name="photo" type="url">
        {errors.photo && errors.photo.type === "required" && (
          <span>Field cannot be empty</span>
        )}
      </PhotoFrame>
      <TitleForm placeholder="Enter Title. . ." name="name" type="text">
        {errors.name && errors.name.type === "required" && (
          <span>Field cannot be empty</span>
        )}
      </TitleForm>
      <Text
        placeholder="What are you doing??? :3"
        name="description"
        type="text"
      >
        {errors.description && errors.description.type === "required" && (
          <span>Field cannot be empty</span>
        )}
      </Text>
      <Timing />
      <Save></Save>
    </GridContainer>
  );
}
