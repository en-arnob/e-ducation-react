import React from "react";

import PLCard from "./PLCard";
import PDetailed from "./PDetailed";

const Profile = () => {
  const lem = "kcen";
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <PLCard var={lem} />
      <PDetailed />
    </div>
  );
};

export default Profile;
