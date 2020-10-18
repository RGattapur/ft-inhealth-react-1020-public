
import React from "react";

const Admin = () => 

<section><h2>Admin</h2>
    <p>Access to this route allowed because localStorage contains <span>{JSON.stringify(localStorage)}</span></p>
</section>;

export {Admin}