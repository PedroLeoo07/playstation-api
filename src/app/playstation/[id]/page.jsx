"use client";

import { useState, useEffect, use } from "react";
import { Card, Spin, Button, Descriptions, Tag } from "antd";
import { ArrowLeftOutlined, GamepadOutlined, InfoCircleOutlined, SettingOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import styles from "./[id].module.css";

export default function PlayStationDetailsPage({ params }) {
    const [playstation, setPlaystation] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const resolvedParams = use(params);

    // Função simplificada para buscar PlayStation
    const fetchPlayStation = async (playstationId) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${playstationId}`);
            
            // Adaptando dados de usuário para PlayStation
            const adaptedData = {
                id: response.data.id,
                model: `PlayStation ${response.data.id}`,
                name: response.data.name,
                username: response.data.username,
                email: response.data.email,
                phone: response.data.phone,
                website: response.data.website,
                generation: Math.floor(Math.random() * 5) + 1,
                releaseYear: 1995 + (response.data.id * 2),
                price: `R$ ${(response.data.id * 299).toLocaleString()}`,
                storage: response.data.id % 2 === 0 ? '1TB' : '500GB',
                color: response.data.id % 3 === 0 ? 'Branco' : response.data.id % 2 === 0 ? 'Preto' : 'Azul',
                status: response.data.id % 4 === 0 ? 'Disponível' : 'Em Estoque',
                address: response.data.address,
                company: {
                    name: `${response.data.company.name} Gaming`,
                    description: response.data.company.catchPhrase,
                    category: response.data.company.bs
                }
            };
            
            setPlaystation(adaptedData);
        } catch (error) {
            console.error("Erro ao buscar PlayStation:", error);
            setPlaystation(null);
        } finally {
            setLoading(false);
        }
    };

    // Executa a busca quando o componente carrega
    useEffect(() => {
        if (resolvedParams?.id) {
            fetchPlayStation(resolvedParams.id);
        }
    }, [resolvedParams?.id]);

    // Tela de carregamento
    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Carregando detalhes do PlayStation...</p>
                </div>
            </div>
        );
    }

    // Tela de erro (PlayStation não encontrado)
    if (!playstation) {
        return (
            <div className={styles.container}>
                <div className={styles.errorWrapper}>
                    <h3>PlayStation não encontrado</h3>
                    <Link href="/playstation">
                        <Button type="primary" icon={<ArrowLeftOutlined />}>
                            Voltar para lista
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    // Conteúdo principal
    return (
        <div className={styles.container}>
            {/* Cabeçalho com botão voltar */}
            <div className={styles.header}>
                <Link href="/playstation">
                    <Button icon={<ArrowLeftOutlined />} className={styles.backButton}>
                        Voltar
                    </Button>
                </Link>
                <h2 className={styles.title}>Detalhes do PlayStation</h2>
            </div>

            <div className={styles.contentWrapper}>
                {/* Card com ícone e info principal */}
                <Card className={styles.mainCard}>
                    <div className={styles.playstationHeader}>
                        <div className={styles.icon}>
                            <GamepadOutlined className={styles.iconImage} />
                        </div>
                        <div className={styles.playstationInfo}>
                            <h3 className={styles.modelName}>{playstation.model}</h3>
                            <p className={styles.price}>{playstation.price}</p>
                            <p className={styles.email}>{playstation.email}</p>
                        </div>
                    </div>
                </Card>

                {/* Informações Gerais */}
                <Card 
                    title={<><InfoCircleOutlined /> Informações Gerais</>}
                    className={styles.detailCard}
                >
                    <Descriptions column={1} bordered>
                        <Descriptions.Item label="ID">
                            {playstation.id}
                        </Descriptions.Item>
                        <Descriptions.Item label="Modelo">
                            {playstation.model}
                        </Descriptions.Item>
                        <Descriptions.Item label="Geração">
                            {playstation.generation}ª Geração
                        </Descriptions.Item>
                        <Descriptions.Item label="Ano de Lançamento">
                            {playstation.releaseYear}
                        </Descriptions.Item>
                        <Descriptions.Item label="Cor">
                            {playstation.color}
                        </Descriptions.Item>
                        <Descriptions.Item label="Armazenamento">
                            {playstation.storage}
                        </Descriptions.Item>
                        <Descriptions.Item label="Status">
                            {playstation.status}
                        </Descriptions.Item>
                        <Descriptions.Item label="Website">
                            <a href={`http://${playstation.website}`} target="_blank">
                                {playstation.website}
                            </a>
                        </Descriptions.Item>
                    </Descriptions>
                </Card>

                {/* Especificações Técnicas */}
                <Card 
                    title={<><SettingOutlined /> Especificações Técnicas</>}
                    className={styles.detailCard}
                >
                    <Descriptions column={1} bordered>
                        <Descriptions.Item label="Nome do Produto">
                            {playstation.name}
                        </Descriptions.Item>
                        <Descriptions.Item label="Código do Produto">
                            {playstation.username}
                        </Descriptions.Item>
                        <Descriptions.Item label="Email de Suporte">
                            {playstation.email}
                        </Descriptions.Item>
                        <Descriptions.Item label="Telefone de Suporte">
                            {playstation.phone}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>

                {/* Informações de Distribuição */}
                <Card 
                    title={<><InfoCircleOutlined /> Local de Distribuição</>}
                    className={styles.detailCard}
                >
                    <Descriptions column={1} bordered>
                        <Descriptions.Item label="Rua">
                            {playstation.address.street}
                        </Descriptions.Item>
                        <Descriptions.Item label="Complemento">
                            {playstation.address.suite}
                        </Descriptions.Item>
                        <Descriptions.Item label="Cidade">
                            {playstation.address.city}
                        </Descriptions.Item>
                        <Descriptions.Item label="CEP">
                            {playstation.address.zipcode}
                        </Descriptions.Item>
                        <Descriptions.Item label="Coordenadas">
                            Lat: {playstation.address.geo.lat}, Lng: {playstation.address.geo.lng}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>

                {/* Informações da Empresa */}
                <Card 
                    title={<><GamepadOutlined /> Fabricante</>}
                    className={styles.detailCard}
                >
                    <Descriptions column={1} bordered>
                        <Descriptions.Item label="Nome da Empresa">
                            {playstation.company.name}
                        </Descriptions.Item>
                        <Descriptions.Item label="Descrição">
                            {playstation.company.description}
                        </Descriptions.Item>
                        <Descriptions.Item label="Categoria">
                            {playstation.company.category}
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
            </div>
        </div>
    );
}
