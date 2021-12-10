import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  .button-container {
    display: flex;
  }
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;
const Modalcontent = styled.div`
  position: absolute;
  top: 60%;
  left: 80%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 10px 20px;
  border-radius: 30px;
  max-width: 600px;
  min-width: 300px;

  section {
    border: 1px solid;

    .form-group {
      padding-top: 10px;
      display: flex;
      justify-content: space-around;
    }
    .form-group1 {
      padding-top: 10px;
      display: flex;
      justify-content: space-around;
    }
    textarea {
      margin: 30px 20px 20px 30px;
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 40px;

  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
  }
`;

const Model = ({
  to,
  setTo,
  subject,
  setSubject,
  body,
  setBody,
  sendMail,
  toogleModal,
}) => {
  return (
    <Wrapper>
      <Overlay>
        <Modalcontent>
          <h2>send your message here</h2>
          <section>
            <div className='form-group'>
              <label>To</label>
              <input
                type='email'
                name='email'
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className='form-group1'>
              <label>Subject</label>
              <input
                type='text'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <textarea
              cols='30'
              rows='10'
              name='body'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <div className='button-container'>
              <Button className='close-modal' onClick={sendMail}>
                send
              </Button>

              <Button className='close-modal' onClick={toogleModal}>
                close
              </Button>
            </div>
          </section>
        </Modalcontent>
      </Overlay>
    </Wrapper>
  );
};

export default Model;
