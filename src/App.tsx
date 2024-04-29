import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppRoute } from './const';
import { LoginForm } from './pages/login-form';
import { MoviesList } from './pages/movies-list';
import { AuthProvider } from './components/auth-context';
import { RandomMovie } from './pages/random-movie';
import { PrivateRoute } from './components/private-route';
import { Movie } from './pages/movie';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path={AppRoute.Login} element={<LoginForm />} />
                    <Route path={AppRoute.Root} element={<MoviesList />} />
                    <Route path={AppRoute.Movie} element={<Movie />} />
                    <Route
                        path={AppRoute.RandomMovie}
                        element={
                            <PrivateRoute>
                                <RandomMovie />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
