import React, { useState } from "react";

export default function LoadingSpinner({isSuccessBridge}) {
    return (
        <>{isSuccessBridge &&  <span className="loader_spinner"></span>} </>
    );
}