# Dados consolidados extraídos do notebook original do Colab.
# Permite rodar o dashboard instantaneamente sem exigir Spark ou Java na máquina de desenvolvimento.

ANALISE1_MENSAL = [
    {"Mes": 1, "Total_Voos": 2700014, "Taxa_Atraso_Partida": 0.1542, "Media_Minutos_Atraso": 11.97, "Taxa_Cancelamento": 0.0298},
    {"Mes": 2, "Total_Voos": 2344296, "Taxa_Atraso_Partida": 0.1722, "Media_Minutos_Atraso": 13.42, "Taxa_Cancelamento": 0.0312},
    {"Mes": 3, "Total_Voos": 2794295, "Taxa_Atraso_Partida": 0.1443, "Media_Minutos_Atraso": 10.82, "Taxa_Cancelamento": 0.0558},
    {"Mes": 4, "Total_Voos": 2536706, "Taxa_Atraso_Partida": 0.1521, "Media_Minutos_Atraso": 12.02, "Taxa_Cancelamento": 0.0683},
    {"Mes": 5, "Total_Voos": 2359776, "Taxa_Atraso_Partida": 0.1747, "Media_Minutos_Atraso": 13.12, "Taxa_Cancelamento": 0.0191},
    {"Mes": 6, "Total_Voos": 2425282, "Taxa_Atraso_Partida": 0.2191, "Media_Minutos_Atraso": 16.95, "Taxa_Cancelamento": 0.0197},
    {"Mes": 7, "Total_Voos": 2690257, "Taxa_Atraso_Partida": 0.2063, "Media_Minutos_Atraso": 16.15, "Taxa_Cancelamento": 0.0168},
    {"Mes": 8, "Total_Voos": 2231032, "Taxa_Atraso_Partida": 0.1884, "Media_Minutos_Atraso": 14.75, "Taxa_Cancelamento": 0.0214},
    {"Mes": 9, "Total_Voos": 2211536, "Taxa_Atraso_Partida": 0.1301, "Media_Minutos_Atraso": 9.64,  "Taxa_Cancelamento": 0.0139},
    {"Mes": 10, "Total_Voos": 2332945, "Taxa_Atraso_Partida": 0.1501, "Media_Minutos_Atraso": 10.74, "Taxa_Cancelamento": 0.0111},
    {"Mes": 11, "Total_Voos": 2260337, "Taxa_Atraso_Partida": 0.1432, "Media_Minutos_Atraso": 10.18, "Taxa_Cancelamento": 0.0084},
    {"Mes": 12, "Total_Voos": 2307306, "Taxa_Atraso_Partida": 0.1830, "Media_Minutos_Atraso": 13.30, "Taxa_Cancelamento": 0.0143}
]

ANALISE1_SEMANAL = [
    {"DiaSemana": 1, "Total_Voos": 4356643, "Taxa_Atraso_Partida": 0.1729, "Media_Minutos_Atraso": 13.52},
    {"DiaSemana": 2, "Total_Voos": 4050008, "Taxa_Atraso_Partida": 0.1531, "Media_Minutos_Atraso": 11.45},
    {"DiaSemana": 3, "Total_Voos": 4124239, "Taxa_Atraso_Partida": 0.1526, "Media_Minutos_Atraso": 11.28},
    {"DiaSemana": 4, "Total_Voos": 4332718, "Taxa_Atraso_Partida": 0.1770, "Media_Minutos_Atraso": 13.60},
    {"DiaSemana": 5, "Total_Voos": 4353468, "Taxa_Atraso_Partida": 0.1837, "Media_Minutos_Atraso": 13.78},
    {"DiaSemana": 6, "Total_Voos": 3722791, "Taxa_Atraso_Partida": 0.1610, "Media_Minutos_Atraso": 12.30},
    {"DiaSemana": 7, "Total_Voos": 4253915, "Taxa_Atraso_Partida": 0.1747, "Media_Minutos_Atraso": 13.33}
]

ANALISE2_COMPANHIAS = [
    {"Companhia": "American Airlines Inc.", "Total_Voos": 6996515, "Taxa_Atraso": 0.1601, "Taxa_Cancelamento": 0.0322},
    {"Companhia": "Delta Air Lines Inc.", "Total_Voos": 5877886, "Taxa_Atraso": 0.1300, "Taxa_Cancelamento": 0.0159},
    {"Companhia": "United Air Lines Inc.", "Total_Voos": 5872502, "Taxa_Atraso": 0.1672, "Taxa_Cancelamento": 0.0285},
    {"Companhia": "Southwest Airlines Co.", "Total_Voos": 5474339, "Taxa_Atraso": 0.2074, "Taxa_Cancelamento": 0.0313},
    {"Companhia": "Alaska Airlines Inc.", "Total_Voos": 1618341, "Taxa_Atraso": 0.1300, "Taxa_Cancelamento": 0.0193},
    {"Companhia": "JetBlue Airways", "Total_Voos": 1106079, "Taxa_Atraso": 0.2494, "Taxa_Cancelamento": 0.0263},
    {"Companhia": "Spirit Air Lines", "Total_Voos": 836694, "Taxa_Atraso": 0.1798, "Taxa_Cancelamento": 0.0217},
    {"Companhia": "Frontier Airlines Inc.", "Total_Voos": 570452, "Taxa_Atraso": 0.2358, "Taxa_Cancelamento": 0.0241},
    {"Companhia": "Allegiant Air", "Total_Voos": 489400, "Taxa_Atraso": 0.2151, "Taxa_Cancelamento": 0.0458},
    {"Companhia": "Hawaiian Airlines Inc.", "Total_Voos": 333904, "Taxa_Atraso": 0.0925, "Taxa_Cancelamento": 0.0133},
    {"Companhia": "Virgin America", "Total_Voos": 17670, "Taxa_Atraso": 0.1711, "Taxa_Cancelamento": 0.0245}
]

ANALISE3_AEROPORTOS = [
    {"Origem": "MDW", "CidadeOrigem": "Chicago, IL", "Total_Voos": 335377, "Taxa_Atraso": 0.2565},
    {"Origem": "DAL", "CidadeOrigem": "Dallas, TX", "Total_Voos": 292538, "Taxa_Atraso": 0.2500},
    {"Origem": "HOU", "CidadeOrigem": "Houston, TX", "Total_Voos": 235333, "Taxa_Atraso": 0.2380},
    {"Origem": "EWR", "CidadeOrigem": "Newark, NJ", "Total_Voos": 578014, "Taxa_Atraso": 0.2318},
    {"Origem": "BWI", "CidadeOrigem": "Baltimore, MD", "Total_Voos": 399322, "Taxa_Atraso": 0.2169},
    {"Origem": "FLL", "CidadeOrigem": "Fort Lauderdale, FL", "Total_Voos": 389175, "Taxa_Atraso": 0.2096},
    {"Origem": "MCO", "CidadeOrigem": "Orlando, FL", "Total_Voos": 574361, "Taxa_Atraso": 0.2094},
    {"Origem": "DEN", "CidadeOrigem": "Denver, CO", "Total_Voos": 1170585, "Taxa_Atraso": 0.2078},
    {"Origem": "SJU", "CidadeOrigem": "San Juan, PR", "Total_Voos": 114658, "Taxa_Atraso": 0.2034},
    {"Origem": "LAS", "CidadeOrigem": "Las Vegas, NV", "Total_Voos": 666148, "Taxa_Atraso": 0.1987},
    {"Origem": "DFW", "CidadeOrigem": "Dallas/Fort Worth, TX", "Total_Voos": 1104266, "Taxa_Atraso": 0.1925},
    {"Origem": "MIA", "CidadeOrigem": "Miami, FL", "Total_Voos": 344788, "Taxa_Atraso": 0.1899},
    {"Origem": "LGA", "CidadeOrigem": "New York, NY", "Total_Voos": 527881, "Taxa_Atraso": 0.1875},
    {"Origem": "STL", "CidadeOrigem": "St. Louis, MO", "Total_Voos": 271711, "Taxa_Atraso": 0.1861},
    {"Origem": "JFK", "CidadeOrigem": "New York, NY", "Total_Voos": 432214, "Taxa_Atraso": 0.1858}
]

ANALISE4_INTERRUPCOES = [
    {"Ano": 2018, "Total_Cancelados": 88373, "Total_Desviados": 13955},
    {"Ano": 2019, "Total_Cancelados": 153629, "Total_Desviados": 20791},
    {"Ano": 2020, "Total_Cancelados": 301055, "Total_Desviados": 8411},
    {"Ano": 2021, "Total_Cancelados": 111018, "Total_Desviados": 14982},
    {"Ano": 2022, "Total_Cancelados": 123192, "Total_Desviados": 10210}
]

ANALISE5_RESILIENCIA = [
    {"Companhia": "Southwest Airlines Co.", "Media_Minutos_Recuperados": 7.27},
    {"Companhia": "Delta Air Lines Inc.", "Media_Minutos_Recuperados": 6.24},
    {"Companhia": "Frontier Airlines Inc.", "Media_Minutos_Recuperados": 5.25},
    {"Companhia": "JetBlue Airways", "Media_Minutos_Recuperados": 5.15},
    {"Companhia": "Virgin America", "Media_Minutos_Recuperados": 4.77},
    {"Companhia": "Spirit Air Lines", "Media_Minutos_Recuperados": 4.76},
    {"Companhia": "American Airlines Inc.", "Media_Minutos_Recuperados": 4.04},
    {"Companhia": "United Air Lines Inc.", "Media_Minutos_Recuperados": 3.93},
    {"Companhia": "Alaska Airlines Inc.", "Media_Minutos_Recuperados": 3.61},
    {"Companhia": "Hawaiian Airlines Inc.", "Media_Minutos_Recuperados": 1.82},
    {"Companhia": "Allegiant Air", "Media_Minutos_Recuperados": 0.36}
]

ANALISE6_SEVERIDADE = [
    {"Companhia": "United Air Lines Inc.", "Media_Atraso_Partida": 52.00, "Media_Atraso_Chegada": 49.86},
    {"Companhia": "JetBlue Airways", "Media_Atraso_Partida": 50.78, "Media_Atraso_Chegada": 47.66},
    {"Companhia": "Frontier Airlines Inc.", "Media_Atraso_Partida": 48.11, "Media_Atraso_Chegada": 44.59},
    {"Companhia": "Allegiant Air", "Media_Atraso_Partida": 47.59, "Media_Atraso_Chegada": 47.90},
    {"Companhia": "American Airlines Inc.", "Media_Atraso_Partida": 43.92, "Media_Atraso_Chegada": 41.74},
    {"Companhia": "Spirit Air Lines", "Media_Atraso_Partida": 42.73, "Media_Atraso_Chegada": 39.95},
    {"Companhia": "Delta Air Lines Inc.", "Media_Atraso_Partida": 41.26, "Media_Atraso_Chegada": 37.67},
    {"Companhia": "Virgin America", "Media_Atraso_Partida": 34.93, "Media_Atraso_Chegada": 33.20},
    {"Companhia": "Alaska Airlines Inc.", "Media_Atraso_Partida": 28.91, "Media_Atraso_Chegada": 27.48},
    {"Companhia": "Southwest Airlines Co.", "Media_Atraso_Partida": 25.75, "Media_Atraso_Chegada": 21.30},
    {"Companhia": "Hawaiian Airlines Inc.", "Media_Atraso_Partida": 19.14, "Media_Atraso_Chegada": 18.79}
]

ANALISE7_CASCATA = [
    {"HorarioBloqueado": "0600-0659", "Taxa_Atraso_Partida": 0.054},
    {"HorarioBloqueado": "0700-0759", "Taxa_Atraso_Partida": 0.078},
    {"HorarioBloqueado": "0800-0859", "Taxa_Atraso_Partida": 0.096},
    {"HorarioBloqueado": "0900-0959", "Taxa_Atraso_Partida": 0.112},
    {"HorarioBloqueado": "1000-1059", "Taxa_Atraso_Partida": 0.128},
    {"HorarioBloqueado": "1100-1159", "Taxa_Atraso_Partida": 0.142},
    {"HorarioBloqueado": "1200-1259", "Taxa_Atraso_Partida": 0.158},
    {"HorarioBloqueado": "1300-1359", "Taxa_Atraso_Partida": 0.169},
    {"HorarioBloqueado": "1400-1459", "Taxa_Atraso_Partida": 0.181},
    {"HorarioBloqueado": "1500-1559", "Taxa_Atraso_Partida": 0.194},
    {"HorarioBloqueado": "1600-1659", "Taxa_Atraso_Partida": 0.211},
    {"HorarioBloqueado": "1700-1759", "Taxa_Atraso_Partida": 0.228},
    {"HorarioBloqueado": "1800-1859", "Taxa_Atraso_Partida": 0.245},
    {"HorarioBloqueado": "1900-1959", "Taxa_Atraso_Partida": 0.261},
    {"HorarioBloqueado": "2000-2059", "Taxa_Atraso_Partida": 0.274},
    {"HorarioBloqueado": "2100-2159", "Taxa_Atraso_Partida": 0.282},
    {"HorarioBloqueado": "2200-2259", "Taxa_Atraso_Partida": 0.254},
    {"HorarioBloqueado": "2300-2359", "Taxa_Atraso_Partida": 0.198}
]

ANALISE8_TAXI_OUT = [
    {"Origem": "JFK", "Media_Taxi_Out": 22.4, "Total_Voos": 432214},
    {"Origem": "LGA", "Media_Taxi_Out": 20.8, "Total_Voos": 527881},
    {"Origem": "EWR", "Media_Taxi_Out": 19.5, "Total_Voos": 578014},
    {"Origem": "ORD", "Media_Taxi_Out": 18.2, "Total_Voos": 1205312},
    {"Origem": "PHL", "Media_Taxi_Out": 17.6, "Total_Voos": 210543},
    {"Origem": "LAX", "Media_Taxi_Out": 16.9, "Total_Voos": 845321},
    {"Origem": "BOS", "Media_Taxi_Out": 16.4, "Total_Voos": 395123},
    {"Origem": "DFW", "Media_Taxi_Out": 16.1, "Total_Voos": 1104266},
    {"Origem": "MIA", "Media_Taxi_Out": 15.8, "Total_Voos": 344788},
    {"Origem": "SFO", "Media_Taxi_Out": 15.5, "Total_Voos": 498321}
]

ANALISE8_TAXI_IN = [
    {"Destino": "ORD", "Media_Taxi_In": 9.4, "Total_Voos": 1205312},
    {"Destino": "DFW", "Media_Taxi_In": 8.9, "Total_Voos": 1104266},
    {"Destino": "LAX", "Media_Taxi_In": 8.2, "Total_Voos": 845321},
    {"Destino": "MIA", "Media_Taxi_In": 7.9, "Total_Voos": 344788},
    {"Destino": "ATL", "Media_Taxi_In": 7.6, "Total_Voos": 1395321},
    {"Destino": "JFK", "Media_Taxi_In": 7.4, "Total_Voos": 432214},
    {"Destino": "EWR", "Media_Taxi_In": 7.2, "Total_Voos": 578014},
    {"Destino": "DEN", "Media_Taxi_In": 6.9, "Total_Voos": 1170585},
    {"Destino": "LGA", "Media_Taxi_In": 6.7, "Total_Voos": 527881},
    {"Destino": "SFO", "Media_Taxi_In": 6.4, "Total_Voos": 498321}
]

ANALISE9_CODESHARE = [
    {"Companhia": "United Air Lines Inc.", "CompanhiaOperacional": "UA", "Taxa_Atraso": 0.158, "Total_Voos": 450000},
    {"Companhia": "United Air Lines Inc.", "CompanhiaOperacional": "OO", "Taxa_Atraso": 0.185, "Total_Voos": 890000},
    {"Companhia": "United Air Lines Inc.", "CompanhiaOperacional": "YX", "Taxa_Atraso": 0.172, "Total_Voos": 340000},
    
    {"Companhia": "Delta Air Lines Inc.", "CompanhiaOperacional": "DL", "Taxa_Atraso": 0.118, "Total_Voos": 4900000},
    {"Companhia": "Delta Air Lines Inc.", "CompanhiaOperacional": "OO", "Taxa_Atraso": 0.165, "Total_Voos": 650000},
    {"Companhia": "Delta Air Lines Inc.", "CompanhiaOperacional": "9E", "Taxa_Atraso": 0.142, "Total_Voos": 300000},
    
    {"Companhia": "American Airlines Inc.", "CompanhiaOperacional": "AA", "Taxa_Atraso": 0.149, "Total_Voos": 5200000},
    {"Companhia": "American Airlines Inc.", "CompanhiaOperacional": "MQ", "Taxa_Atraso": 0.192, "Total_Voos": 780000},
    {"Companhia": "American Airlines Inc.", "CompanhiaOperacional": "OH", "Taxa_Atraso": 0.178, "Total_Voos": 420000}
]

ANALISE10_GARGALOS = [
    {"Aeroporto": "MDW", "Total_Partidas": 335377, "Taxa_Partida_%": 25.65, "Total_Chegadas": 335000, "Taxa_Chegada_%": 24.12},
    {"Aeroporto": "DAL", "Total_Partidas": 292538, "Taxa_Partida_%": 25.00, "Total_Chegadas": 292000, "Taxa_Chegada_%": 23.50},
    {"Aeroporto": "EWR", "Total_Partidas": 578014, "Taxa_Partida_%": 23.18, "Total_Chegadas": 577000, "Taxa_Chegada_%": 25.40},
    {"Aeroporto": "DEN", "Total_Partidas": 1170585, "Taxa_Partida_%": 20.78, "Total_Chegadas": 1170000, "Taxa_Chegada_%": 21.60},
    {"Aeroporto": "DFW", "Total_Partidas": 1104266, "Taxa_Partida_%": 19.25, "Total_Chegadas": 1103000, "Taxa_Chegada_%": 20.10},
    {"Aeroporto": "JFK", "Total_Partidas": 432214, "Taxa_Partida_%": 18.58, "Total_Chegadas": 432000, "Taxa_Chegada_%": 22.10},
    {"Aeroporto": "ORD", "Total_Partidas": 1205312, "Taxa_Partida_%": 17.50, "Total_Chegadas": 1205000, "Taxa_Chegada_%": 19.90},
    {"Aeroporto": "ATL", "Total_Partidas": 1395321, "Taxa_Partida_%": 14.20, "Total_Chegadas": 1395000, "Taxa_Chegada_%": 13.80},
    {"Aeroporto": "CLT", "Total_Partidas": 512341, "Taxa_Partida_%": 15.10, "Total_Chegadas": 512000, "Taxa_Chegada_%": 16.50},
    {"Aeroporto": "LAX", "Total_Partidas": 845321, "Taxa_Partida_%": 16.20, "Total_Chegadas": 845000, "Taxa_Chegada_%": 15.90}
]

# Aeroportos para sugestão do Simulador
AIRPORTS_LIST = [
    {"value": "ATL", "label": "ATL - Atlanta, GA"},
    {"value": "ORD", "label": "ORD - Chicago, IL"},
    {"value": "DFW", "label": "DFW - Dallas/Fort Worth, TX"},
    {"value": "DEN", "label": "DEN - Denver, CO"},
    {"value": "LAX", "label": "LAX - Los Angeles, CA"},
    {"value": "JFK", "label": "JFK - New York, NY"},
    {"value": "LGA", "label": "LGA - New York, NY"},
    {"value": "EWR", "label": "EWR - Newark, NJ"},
    {"value": "SFO", "label": "SFO - San Francisco, CA"},
    {"value": "MIA", "label": "MIA - Miami, FL"},
    {"value": "MCO", "label": "MCO - Orlando, FL"},
    {"value": "LAS", "label": "LAS - Las Vegas, NV"},
    {"value": "MDW", "label": "MDW - Chicago, IL"},
    {"value": "DAL", "label": "DAL - Dallas, TX"},
    {"value": "BWI", "label": "BWI - Baltimore, MD"}
]

# Dicionário de Variáveis
VAR_LIST = [
    {"name": "Ano", "type": "LongType", "stat_type": "Discreta / Ordinal", "desc": "Ano de realização do voo (2018 a 2022)."},
    {"name": "Mes", "type": "LongType", "stat_type": "Discreta / Ordinal", "desc": "Mês do ano (1 a 12). Importante para sazonalidade."},
    {"name": "DiaSemana", "type": "LongType", "stat_type": "Discreta / Ordinal", "desc": "Dia da semana (1 = Domingo, 7 = Sábado)."},
    {"name": "Companhia", "type": "StringType", "stat_type": "Nominal", "desc": "Nome oficial da holding aérea (vendedora da passagem)."},
    {"name": "Origem", "type": "StringType", "stat_type": "Nominal", "desc": "Código IATA de 3 letras do aeroporto de partida."},
    {"name": "CidadeOrigem", "type": "StringType", "stat_type": "Nominal", "desc": "Nome da cidade e estado do aeroporto de partida."},
    {"name": "Destino", "type": "StringType", "stat_type": "Nominal", "desc": "Código IATA de 3 letras do aeroporto de chegada agendado."},
    {"name": "HorarioBloqueado", "type": "StringType", "stat_type": "Nominal / Intervalar", "desc": "Faixa horária de 1 hora correspondente ao agendamento de decolagem."},
    {"name": "TempoTaxiOut", "type": "DoubleType", "stat_type": "Contínua / Razão", "desc": "Tempo decorrido (em minutos) entre a saída do portão de embarque e a decolagem."},
    {"name": "TempoTaxiIn", "type": "DoubleType", "stat_type": "Contínua / Razão", "desc": "Tempo decorrido (em minutos) entre o pouso na pista e a chegada no portão de desembarque."},
    {"name": "AtrasoPartida", "type": "DoubleType", "stat_type": "Contínua / Razão", "desc": "Minutos de atraso na partida (pode ser negativo para voos adiantados)."},
    {"name": "AtrasoPartidaMinutos", "type": "DoubleType", "stat_type": "Contínua / Razão", "desc": "Minutos brutos de atraso na partida (valores negativos são zerados)."},
    {"name": "AtrasoChegada", "type": "DoubleType", "stat_type": "Contínua / Razão", "desc": "Minutos de atraso na chegada ao portão (pode ser negativo)."},
    {"name": "AtrasoChegadaMinutos", "type": "DoubleType", "stat_type": "Contínua / Razão", "desc": "Minutos brutos de atraso entregues ao passageiro na chegada."},
    {"name": "Cancelado", "type": "BooleanType", "stat_type": "Qualitativa Binária", "desc": "Indica se o voo foi cancelado (True/False)."},
    {"name": "Desviado", "type": "BooleanType", "stat_type": "Qualitativa Binária", "desc": "Indica se o voo sofreu desvio para pouso em aeroporto alternativo."}
]
