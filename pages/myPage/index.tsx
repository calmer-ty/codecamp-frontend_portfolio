import { WithAuth } from "../../src/commons/hocs/withAuth";

function MyPage(): JSX.Element {
  return (
    <>
      <div>임시</div>
    </>
  );
}

export default WithAuth(MyPage);
