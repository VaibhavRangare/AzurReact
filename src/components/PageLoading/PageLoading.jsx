
import './_page_loading.scss';
import { Loading } from '@carbon/react';

const PageLoading = (props) => {

  function processing() {
    if (props.display_loading === "true") {
      return (
        <div align="center">
          <Loading
            description={props.loadingmessage} withOverlay={false}
          />
        </div>
      );
    }
  }

  return (
    <div className="myClass">
      <div  >
        {props.loadingmessage}
        <br></br><br></br><br></br>
        {processing()}
      </div>
    </div>
  )
}

export default PageLoading;