import { useState } from 'react';
import React, { useContext, useEffect } from "react";
import { AccountContext } from "./Account";
// import axios from 'axios';

const CreateRecipe = () => {
  const [page, setPage] = useState(0);
  const [submitting, setSubmitting] = useState(false);
 
  const [status, setStatus] = useState(false);

  const { getSession} = useContext(AccountContext);
  
  useEffect(()=>{
      getSession()
      .then(session => {
          setStatus(true);
      })
  },[getSession]);

  return (
    <>
    {status?
    <>
    This is dashboard.
    </>: <h1>You are not logged in</h1>}
    </>
  );
};

export default CreateRecipe;