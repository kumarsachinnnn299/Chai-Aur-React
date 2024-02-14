import './App.css'
import conf from './conf/conf';
function App() {
 //To read env file

 console.log(conf.appwriteBucketId);
 console.log(conf.appwriteCollectionId);
 console.log(conf.appwriteDatabaseId);
 console.log(conf.appwriteProjectId);
 console.log(conf.appwriteUrl);

  return (
    <>
      <h1>A blog app with Appwrite</h1>
        
    </>
  )
}

export default App
