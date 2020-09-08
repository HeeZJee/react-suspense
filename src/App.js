import React from 'react';
import User from './User';
import User2 from './User2';
import { Suspense } from 'react';
import { createResource } from './promiseWrapper';



function App() {
  const resource = createResource()
  return (
    <div>
      {/* <User /> */}
      <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading...</div>}>
        < User2 resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
