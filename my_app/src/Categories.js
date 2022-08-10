import React, { Component } from 'react';
import { useState } from "react"
import { Helmet } from "react-helmet"
import { useEffect } from 'react'
import Popup from "./InsertCategoryPopup"
import DeletePopup from './DeleteCategoryPopup';


export default function Categories() {


  const [category, setCategories] = useState([]);
  const [isPreviewShown, setPreviewShown] = useState(false);
  const [isDeleteShown, setIsDeleteShown] = useState(false);
  const [number, SetNumber] = useState(1);


  function DeleteCategory(catName) {

    const url = `https://localhost:7137/api/Category/Name?name=`;

    const FinalURL = url + catName.Name;

    fetch(FinalURL, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(catName)
    })
      .then(response => response.json())
      .then(responseFromServer => {
        


      })
      .catch((error) => {
        alert(error);
      })
  }
  function CreateCategory(catName) {


    const url = "https://localhost:7137/api/Category";

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(catName)
    })
      .then(response => response.json())
      .then(responseFromServer => {
        
      


      })
      .catch((error) => {
       
        alert(error);
      })

  };



  function GetCategories() {

    useEffect(() => {
      const url = 'https://localhost:7137/api/Category/all';

      fetch(url, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(categoriesFromServer => {

          setCategories(categoriesFromServer);
        })
        .catch((error) => {
          alert(error);
        })
    }, [category]);
  }
  function renderPopup(e) {
    e.preventDefault();

    setPreviewShown(true);

  }
  function renderDeletePopup(e) {
    e.preventDefault();

    setIsDeleteShown(true);

  }
  function RenderCategories() {

    return (
      <div>
        {category.map((cat) => (
          <h2 key={cat.id}><i className="ico categories"></i>{cat.name}</h2>
        ))}


      </div>
    )
  }

  const handleDelete = catName => {
    DeleteCategory(catName);

  }
  function ClosePopupCategories() {
    setPreviewShown(false);
  }
  function ClosePopupCategoriesDelete() {
    setIsDeleteShown(false);
  }


  return (

    <div className="wrapper">
      <section className="content2">
        <h2><i className="ico categories"></i>Categories</h2>
        {GetCategories()}
        {RenderCategories()}


        <a className="link new-member-popup" id="CreateCat" href="javascript:;" onClick={renderPopup}>Create new category</a>
        <br></br>
        <a className="link new-member-popup" id="CreateCat" href="javascript:;" onClick={renderDeletePopup}>Delete category</a>



      </section>
      {isPreviewShown && <Popup CreateCategory={CreateCategory} ClosePopupCategories={ClosePopupCategories} />}
      {isDeleteShown && <DeletePopup handleDelete={handleDelete} ClosePopupCategoriesDelete={ClosePopupCategoriesDelete} />}
    </div>
  )
}
