import { useEffect, useState } from "react";
import { getFormResponse } from "../../../api/form";
import { useSelector } from "react-redux";

function FormResponse({ formKey }) {
  const formId = useSelector((state) => state.formsReducer[formKey]._id);
  const [responseAvailable, setResponseAvailable] = useState(false);
  const [responseFetchError, setResponseFetchError] = useState("");
  const [userResponse, setUserResponse] = useState({});
  const [views, setViews] = useState("");
  const [starts, setStarts] = useState("");
  const [completionRate, setCompletionRate] = useState("");

  function prepareReponseHeader(response) {
    const header = [];
    for (const inputName in response) {
      header.push(inputName);
    }

    console.debug(`response header : ${header}`);
    return header;
  }

  function prepareResonseData(responses, header) {
    const responseData = [];
    responses.forEach((response, index) => {
      const data = [];
      data.push(index + 1);
      for (let i = 0; i < header.length; i++) {
        const inputName = header[i];
        data.push(response[inputName]);
      }

      console.debug(`response data : ${data}`);
      responseData.push(data);
    });

    return responseData;
  }

  async function loadResponse() {
    if (!formId) {
      setResponseAvailable(false);
      return;
    }

    const { statusCode, data, errorMessage } = await getFormResponse(formId);
    if (statusCode !== 200) {
      setResponseFetchError(errorMessage);
      return;
    }

    if (!data.responseStatus) {
      setResponseAvailable(false);
      return;
    }

    setViews(data.responseStatus.views);
    setStarts(data.responseStatus.starts);
    setCompletionRate(data.responseStatus.completionRate);
    const responseHeader = prepareReponseHeader(
      data.responseStatus.responseData[0]
    );
    const responseData = prepareResonseData(
      data.responseStatus.responseData,
      responseHeader
    );
    console.debug(
      `user reponse : header ${responseHeader}, data ${responseData}`
    );
    setUserResponse({ header: responseHeader, data: responseData });
  }

  useEffect(() => {
    loadResponse();
  }, []);

  return (
    <div>
      {!responseAvailable && (
        <section className="response__not-available">
          No Response yet collected
        </section>
      )}

      {responseFetchError && <div>{responseFetchError}</div>}
      {!responseFetchError && (
        <section className="response">
          <section className="response__stats">
            <div>Views {views}</div>
            <div>Starts {starts}</div>
            <div>Completion rate {completionRate}</div>
          </section>
          <section className="response__data">
            <table>
              <th></th>
              {userResponse.header?.map((headerName) => (
                <th>{headerName}</th>
              ))}
              {userResponse.data?.map((data) => (
                <tr>
                  {data.map((inputValue) => (
                    <td style={{ border: "1px solid black;" }}>{inputValue}</td>
                  ))}
                </tr>
              ))}
            </table>
          </section>
        </section>
      )}
    </div>
  );
}

export default FormResponse;
