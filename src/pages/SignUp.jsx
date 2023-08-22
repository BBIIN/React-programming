function SignUp() {
  const handleRegister = (e) => {
    e.preventDefault();
    // PocketBase SDK 인증 요청
    console.log('가입');
  };

  return (
    <div>
      <h2>회원가입</h2>

      <form onSubmit={handleRegister}>
        <button type="submit">가입</button>
      </form>
    </div>
  );
}

export default SignUp;
