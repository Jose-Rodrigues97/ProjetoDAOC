package com.daoc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Colaborador {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(length = 200, nullable = false)
    private String nome;

    @Column(length = 200, nullable = false)
    private String email;

    @Column(length = 200, nullable = false)
    private String senha;

    @Column(length = 50, nullable = false)
    private String estado;

    @Column(length = 50, nullable = false)
    private String cidade;

    @Column(nullable = false)
    private long cep;
}
