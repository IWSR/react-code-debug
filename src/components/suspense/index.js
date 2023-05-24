import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function SuspenseTest() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

export default SuspenseTest;