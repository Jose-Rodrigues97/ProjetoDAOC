package com.daoc.controller;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daoc.model.Colaborador;
import com.daoc.repository.ColaboradorRepository;

import java.util.List;

@RestController
@RequestMapping("/api/colaboradores")
public class ColaboradoresController {

    private final ColaboradorRepository colaboradorRepository;

    public ColaboradoresController(ColaboradorRepository colaboradorRepository) {
        this.colaboradorRepository = colaboradorRepository;
    }

    @GetMapping
    public List<Colaborador> list() {
        return colaboradorRepository.findAll();
    }
}
