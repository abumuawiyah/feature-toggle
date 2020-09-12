import React, { lazy, Suspense } from "react";

function Feature({ name, flag }) {
  let Component = flag && lazy(() => import("./" + name));

  return (
    <>
      {flag && (
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      )}
    </>
  );
}

export default Feature;
