import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();  

  //Get unique id for url
  const newsId = router.query.newsId;  



  return <h1>The Details Page</h1>;
}

export default DetailsPage;
