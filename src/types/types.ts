import { AuthorizationStatus } from '../const';
import React, { ChangeEvent, ReactNode, SetStateAction } from 'react';
import { Studio } from './studios-types';

export type AuthContextType = {
    authStatus: AuthorizationStatus;
    setAuthStatus: React.Dispatch<SetStateAction<AuthorizationStatus>>;
};

export type AuthProviderProps = {
    children: ReactNode;
};

export type PrivateRouteProps = {
    children: JSX.Element;
};

export type ImagesUrlProps = {
    imageUrl: string;
    id: number;
};

export type PaginationProps = {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
};

export type Review = {
    id: number;
    movieId: number;
    title: string;
    type: string;
    review: string;
    date: string;
    author: string;
    userRating: number;
    authorId: number;
    createdAt: string;
    updatedAt: string;
    reviewLikes?: number;
    reviewDislikes?: number;
};

export type ReviewsResponse = {
    docs: Review[];
    total: number;
    limit: number;
    page: number;
    pages: number;
};

export type Genre = {
    name: string;
    slug: string;
};

export type Country = {
    name: string;
    slug: string;
};

export type ContentType = {
    name: string;
    slug: string;
};

export type RandomMovieButtonProps = {
    onClick: () => void;
    isLoading: boolean;
};

export type SearchBarProps = {
    searchQuery: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onLimitChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    limit: number;
    genres: Genre[];
    countries: Country[];
    onAgeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    selectedAge: string;
};

export type RandomSearchBarProps = {
    genres: Genre[];
    countries: Country[];
    contentTypes: ContentType[];
    studios: Studio[];
    onGenreChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    onCountryChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    onYearChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    onNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onContentTypeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    onStudioChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    selectedGenre: string;
    selectedCountry: string;
    selectedContentType: string;
    selectedStudio: string;
};
