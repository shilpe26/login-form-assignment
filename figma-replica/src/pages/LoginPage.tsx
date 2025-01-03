import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    const handleLogin = (values: { username: string; password: string }) => {
        localStorage.setItem('userSession', JSON.stringify(values));
        window.location.href = '/dashboard';
    };

    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 p-4 md:p-0">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;
