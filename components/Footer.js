export default function Footer() {
  return (
    <footer className='footer'>
        Created and maintained by <span>&nbsp;Cinema Buddy</span>
        <style jsx>{`
          .footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.6rem;
          }
          .footer span {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
          }
        `}
        </style>
    </footer>
  );
}