import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { registerAdmin } from '../../../services/auth';
import { validateEmail, validatePassword } from '../../../utils/validation';

const AdminRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState('');

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) newErrors.name = 'Nome é obrigatório';
        if (!email.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email inválido';
        }

        if (!password) {
            newErrors.password = 'Senha é obrigatória';
        } else if (!validatePassword(password)) {
            newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError('');

        if (!validateForm()) return;

        setLoading(true);

        try {
            await registerAdmin({ name, email, password });
            navigate('/login', {
                state: { successMessage: 'Administrador registrado com sucesso!' }
            });
        } catch (error) {
            setApiError(error.message || 'Erro ao registrar administrador');
        } finally {
            setLoading(false);
        }
    };

    return (
        <S.RegisterContainer>
            <S.RegisterCard>
                <S.RegisterHeader>
                    <h1>Criar Conta de Administrador</h1>
                    <p>Preencha os campos para criar uma nova conta</p>
                </S.RegisterHeader>

                <S.RegisterForm onSubmit={handleSubmit}>
                    {apiError && <S.ErrorMessage>{apiError}</S.ErrorMessage>}

                    <Input
                        label="Nome Completo"
                        placeholder="Digite seu nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        $error={errors.name}
                    />

                    <Input
                        label="Email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        $error={errors.email}
                    />

                    <Input
                        label="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        $error={errors.password}
                    />
                    <Button type="submit" $fullWidth disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrar'}
                    </Button>

                    <S.LoginLink>
                        Já tem uma conta? <a href="/login">Faça login</a>
                    </S.LoginLink>
                </S.RegisterForm>
            </S.RegisterCard>
        </S.RegisterContainer>
    );
};

export default AdminRegister;
