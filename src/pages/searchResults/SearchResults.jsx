import classes from "./SearchResults.module.sass";

import { useTranslation } from "react-i18next";

import { useDeferredValue, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useSearchStore } from "./store/useSearchStore";

import { Container } from "../../components/container/Container";
import { Loader } from "../../components/loader/Loader";
import { Errors } from "../../components/error/Errors";

import { Breadcrumbs } from "../../modules/breadcrumbs/Breadcrumbs";

import { ResponsiveComponent } from "../../utils/responsiveComponent/ResponsiveComponent";

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
    const [lastQuery, setLastQuery] = useState(query || "");

    const navigate = useNavigate();

    useEffect(() => {
        if (query) {
            fetchResults(query);
        } else {
            clearResults();
        }
    }, [query, fetchResults, clearResults]);

    const handleSearch = async () => {
        if (defferedInputValue.trim() === "") {
            return;
        }
        try {
            navigate(`?search=${encodeURIComponent(defferedInputValue)}`);
            await fetchResults(defferedInputValue);
            setLastQuery(defferedInputValue);
        } catch (error) {
            console.error("Error during search:", error);
        }
    };

    const handleButtonClick = async () => {
        if (defferedInputValue.trim() !== "") {
            try {
                navigate(`?search=${encodeURIComponent(defferedInputValue)}`);
                await fetchResults(defferedInputValue);
                setLastQuery(defferedInputValue);
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
                        onKeyDown={(e) => { if(e.key === "Enter") handleSearch(); }}
                        type="search"
                    />
                    <button
                        className={classes.searchBtn}
                        onClick={handleButtonClick}
                        disabled={inputValue.trim() === ""}
                    >
                        <ResponsiveComponent type="searchIcon" />
                    </button>
                </div>
                <div className={classes.resultsContainer}>
                    {Object.keys(searchResults).length === 0 && (
                        <span>По запросу {lastQuery} ничего не найдено</span>
                    )}
                    {!loading && !error && searchResults && (
                        <ResultsSections />
                    )}
                </div>
            </Container>
        </section>
    );
};