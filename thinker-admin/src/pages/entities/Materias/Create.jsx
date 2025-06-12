import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { createMateria } from '../../../services/materia';

const MateriasCreate = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await createMateria({ nome, descricao });
            navigate('/materias');
        } catch (err) {
            setError(err.message || 'Erro ao criar matéria');
        } finally {
            setLoading(false);
        }
    };

    return (
        <S.MateriasContainer>
            <S.MateriasHeader>
                <h1>Criar Nova Matéria</h1>
            </S.MateriasHeader>

            <S.MateriasForm onSubmit={handleSubmit}>
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                <Input
                    label="Nome"
                    placeholder="Digite o nome da matéria"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />

                <Input
                    label="Descrição"
                    placeholder="Digite a descrição da matéria"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    textarea
                    rows={4}
                />

                <S.FormActions>
                    <Button
                        type="button"
                        variant="danger"
                        onClick={() => navigate('/materias')}
                    >
                        Cancelar
                    </Button>
                    <Button type="submit" disabled={loading}>
                        {loading ? 'Salvando...' : 'Salvar'}
                    </Button>
                </S.FormActions>
            </S.MateriasForm>
        </S.MateriasContainer>
    );
};

export default MateriasCreate;