import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Erro ao fazer login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <S.LoginContainer>
            <S.LoginCard>
                <S.LoginHeader>
                    <h1>Thinker Admin</h1>
                    <p>Painel administrativo</p>
                </S.LoginHeader>

                <S.LoginForm onSubmit={handleSubmit}>
                    {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                    <Input
                        label="Email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Button type="submit" fullWidth disabled={loading}>
                        {loading ? 'Carregando...' : 'Entrar'}
                    </Button>
                </S.LoginForm>
            </S.LoginCard>
        </S.LoginContainer>
    );
};

export default Login;