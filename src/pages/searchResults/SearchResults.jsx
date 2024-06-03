import classes from "./SearchResults.module.sass";

import { useTranslation } from "react-i18next";

import { useDeferredValue, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useSearchStore } from "./store/useSearchStore";

import { Container } from "../../components/container/Container";
import { Loader } from "../../components/loader/Loader";
import { Errors } from "../../components/error/Errors";

import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs";

import { SearchIcon } from "../../assets/icons/SearchIcon";

import { Typography } from "../../Typography/Typography";

import { ResultsSections } from "./resultsSections/ResultsSections";


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export const SearchResults = () => {
    const { searchResults, fetchResults, loading, error, clearResults } = useSearchStore();

    const { t } = useTranslation();

    const query = useQuery().get("search");
    const [inputValue, setInputValue] = useState(query || "");
    const defferedInputValue = useDeferredValue(inputValue);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            fetchResults(query);
        } else {
            clearResults();
        }
    }, [query, fetchResults, clearResults]);

    const handleSearch = async (e) => {
        if (e.key === "Enter" || e.key === "click") {
            try {
                navigate(`?search=${encodeURIComponent(defferedInputValue)}`);
                await fetchResults(defferedInputValue);
            } catch (error) {
                console.error("Error during search:", error);
            }
        }
    };

    const handleButtonClick = async () => {
        if (defferedInputValue.trim() !== "") {
            try {
                navigate(`?search=${encodeURIComponent(defferedInputValue)}`);
                await fetchResults(defferedInputValue);
            } catch (error) {
                console.error("Error during search:", error);
            }
        }
    };

    const handleValueChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };


    if (loading) return <Loader />;
    if (error) return <Errors />;

    return (
        <section className={classes.SearchResults}>
            <Container>
                <Breadcrumbs className={classes.breadcrumbs} currentPage={t("searchPage")} />
                <Typography className={classes.heading} variant="h1" color="blue500" >
                    {t("searchPage")}
                </Typography>
                <div className={classes.inputWrapper}>
                    <input
                        className={classes.searchInput}
                        value={defferedInputValue}
                        onChange={handleValueChange}
                        onKeyDown={handleSearch}
                        type="search"
                    />
                    <button className={classes.searchBtn} onClick={handleButtonClick} >
                        <SearchIcon />
                    </button>
                </div>
                <div className={classes.resultsContainer}>
                    {Object.keys(searchResults).length === 0 && <span>Резутальты не найдены</span>}
                    {!loading && !error && searchResults && (
                        <ResultsSections query={defferedInputValue} />
                    )}
                </div>
            </Container>
        </section>
    );
};