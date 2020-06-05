import React from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "react-feather";
import "./RequestsLink.css";

export default function RequestsLink({ requestCount }) {
  return (
    <Link to="/requests" className="requests-link flex-center primary">
      <UserPlus size={16} className="request-icon" /> {requestCount}
    </Link>
  );
}
