import Header from "../../modules/header";

type props = {

} & React.HTMLAttributes<HTMLDivElement>

const PageLayout: React.FC<props> = ({children}) => {
  return (
    <>
       <Header />
    </>
  );
};

export default PageLayout;
